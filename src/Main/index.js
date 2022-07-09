import { useState } from 'react';
import { Trends } from '../Trends';
import { RankedSection } from '../RankedSection';
import "./Main.css"


function Main() {

    const [value, setValue] = useState({
        loading: true,
    })

    return [
        <main className='main'>
            <Trends
                setLoading={setValue}
                loading={value.loading}
            />

            <RankedSection
                setLoading={setValue}
                loading={value.loading}
            />

        </main>
    ];
}

export { Main };