import "./RankedSection.css"
import { Ranked } from "../Ranked";

function RankedSection({ loading, setLoading }) {
    return (
        <section className="ranked">
            <h3 className="section-title">TOP RA<b>NKED</b></h3>
            <Ranked
                setLoading={setLoading}
                loading={loading}
            />
        </section>
    );
}

export { RankedSection }