
function Footer({ standCounter }) {
    return (
        <div className="pt-4 mt-8 bg-green-500 h-14 text-black-100">
            <p className="text-center text-l">{`${standCounter} Locations World Wide`}</p>
        </div>
    )
}
export default Footer;