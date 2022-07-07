import "./RankedSection.css"

function RankedSection({ children }) {
    return (
        <section className="ranked">
            <h3 className="section-title">TOP RANKED</h3>
            {children}
        </section>
    );
}

export { RankedSection }