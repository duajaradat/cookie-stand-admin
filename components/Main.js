import Form from './Form';
import { useState } from 'react';

function Main() {
    const [cookiesData, setCookiesData] = useState([]);

    function createCookieStand(e) {
        e.preventDefault();
        const data = {
            location: e.target.location.value,
            min: e.target.min.value,
            max: e.target.max.value,
            avg: e.target.avg.value,
        }
        setCookiesData([...cookiesData, data]);

    }
    return (
        <main>
            <Form cookie={createCookieStand} />
            {cookiesData.length > 0 ? <div>
                <p>Report Table coming Soon...</p>

            </div> : ""}
        </main>
    );
}
export default Main;