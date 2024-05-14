import { Models } from 'appwrite';
import Loader from './Loader';
import GridPostList from './GridPostList';

type SearchResultsProps = {
    isSearchFetching: boolean;
    searchedPosts?: Models.Document[]; // Make searchedPosts optional
}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
    if (isSearchFetching) return <Loader />;
    if (searchedPosts && searchedPosts.length > 0) { // Check if searchedPosts is defined
        return <GridPostList posts={searchedPosts} />;
    }
    return (
        <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
    );
}

export default SearchResults;
