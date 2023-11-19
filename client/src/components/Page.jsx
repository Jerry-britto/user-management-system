import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { nextPage,prevPage } from '../store/slice';
function Page() {
  const dispatch = useDispatch()
  const page = useSelector(state=>state.page)
  const name = useSelector(state=>state.name)
  const totalPage = useSelector(state=>state.totalPages)
  const next = ()=>{
    if (name) return;
    if(page<totalPage){
      dispatch(nextPage())
    }
  }
  const prev = ()=>{
    if(page>1){
      dispatch(prevPage())
    }
  }
  return (
    <div className='flex justify-center my-1 '>
        <button className='text-white bg-black p-2 rounded' onClick={prev}>Prev</button>
        <span className='flex flex-col justify-center items-center mx-2'>
          {!name?`${page} of ${totalPage}`:``}
        </span>
        <button className='text-white bg-black p-2 rounded' onClick={next}>Next</button>
    </div>
  )
}

export default Page
