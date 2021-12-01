
function Footer({ standCounter }) {
    return (
        <div className="flex justify-between p-4 mt-8 bg-green-500 text-black-100">
            <p className="text-l">{`${standCounter} Locations World Wide`}</p>
        </div>
    )
}
export default Footer;