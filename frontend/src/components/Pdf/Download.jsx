import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { AiOutlineDownload } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import { useEffect, useState } from 'react';
const Download = () => {
	const [pdfs, setPdfs] = useState([])
	const {id} = useParams()
	const {  loading } = useSelector((state) => state.pdfs);
	useEffect(() => {
		setPdfs(JSON.parse(localStorage.getItem('pdfs')))
	}, [])

	if(loading){
		return <Spinner/>
	}

	return (
		<div className='text-[var(--lighter-blue,_#29335c)]'>
			<div className='flex mt-5 mb-7 mx-4'>
				<Link
					className='w-1/12 text-2xl md:text-4xl font-bold'
					to={`/ebook/${id[4]}00`}
				>
					<AiOutlineLeft />
				</Link>
				<div className='w-11/12 text-center md:text-2xl font-bold mt-2'>{id} PDFs</div>
			</div>
			<div>
				{pdfs.map((pdf) => {

					return( pdf.fileName === id) ? (
						<div key={pdf._id}>
							<div className='flex  items-center w-[94%] h-[120%] mx-auto rounded-xl my-5 py-2 px-4 bg-[var(--light-black,_rgb(226,232,240))] shadow-3xl md:hidden'>
								<div className='h-[100px] rounded-full w-[35%]'>
									<img className='w-[100%] h-[100%]' src={pdf.thumbnail} alt={pdf.title} />
								</div>
								<div className='my-2 mx-1 w-[60%]'>
									<p className='text-md font-semibold truncate'>{pdf.title}</p>
									<p className='text-[12px]'>{pdf.size} mb</p>
								</div>
								<div className='w-[10%] m-3'>
									<button>
										<a href={pdf.url}>
											<AiOutlineDownload size={30} />
										</a>
									</button>
								</div>
							</div>
						</div>
					) : (
						''
					);
				})}
			</div>
			<div className='max-[767px]:hidden grid md:grid-cols-3 lg:grid-cols-4 gap-12 w-[90%] mx-auto mt-10'>
				{pdfs.map((pdf) => {


					return (pdf.fileName === id )? (
						<div key={pdf._id}
							className=' flex flex-col items-center justify-between rounded-xl bg-[var(--light-black,_rgb(226,232,240))] shadow-3xl'>
							<div className=' w-[100%] h-[10%]'>
								<img className='w-[100%] h-[180px]' src={pdf.thumbnail} alt={pdf.title} />
							</div>
							<div className=' w-[100%]'>
								<p className='text-xl font-semibold truncate mt-4 mb-3'>{pdf.title}</p>
								<div className='flex mx-4 mb-4'>
									<div className='w-1/2'>
										<button>
											<a href={pdf.url}>
												<AiOutlineDownload size={30} />
											</a>
										</button>
									</div>
									<p className='w-1/2 text-right'>{pdf.size} mb</p>
								</div>
							</div>
						</div>
					) : (
						''
					);
				})}
			</div>
		</div>
	 );
};

export default Download;
