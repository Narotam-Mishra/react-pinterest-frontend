import './SearchPage.css';
import Gallery from '../../components/gallery/Gallery';
import { useSearchParams } from 'react-router';

const SearchPage = () => {
  let [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const boardId = searchParams.get("boardId");

  return ( 
    <Gallery search={search} boardId={boardId} />
    // <div className='searchPage'>SearchPage</div>
  )
}

export default SearchPage