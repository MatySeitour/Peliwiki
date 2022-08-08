import { Series } from "../Series"
import "./SeriesSection.css"

function SeriesSection({ loading, setLoading }) {
    return (
        <section className="series">
            <h3 className="section-title">SER<b>IES</b>/TV SH<b>OWS</b></h3>
            <Series
                setLoading={setLoading}
                loading={loading} />
        </section>
    )
}

export { SeriesSection }