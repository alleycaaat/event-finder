import { useRouter } from 'next/router';

const FilteredEvents = () => {
    const router = useRouter()
    const filteredData = router.query.slug

    if (!filteredData) {
return <p className='center'>Loading...</p>
    }

    return (
        <section>
            <h1>Filtered Events</h1>
        </section>
    );
};

export default FilteredEvents;