import CreateForm from './CreateForm';
import ReportTable from './ReportTable';


function Main({ sales, createCookieStand }) {

    return (
        <main className="flex flex-col items-center ">
            <CreateForm createCookieStand={createCookieStand} />
            {sales.length > 0 ? <ReportTable sales={sales} /> : <p className="pt-8 text-xl font-bold text-center">No Cookies Stands Available</p>}

        </main>
    );
}
export default Main;