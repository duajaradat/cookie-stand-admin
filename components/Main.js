import CreateForm from './CreateForm';
import ReportTable from './ReportTable';


function Main({ sales, createCookieStand, loading, setSales }) {

    return (
        <main className="flex flex-col items-center ">
            <CreateForm createCookieStand={createCookieStand} />
            {loading ? <h2 className="my-8 font-bold text-black">Loading . . . </h2> : <ReportTable sales={sales} setSales={setSales} />}
        </main>
    );
}
export default Main;