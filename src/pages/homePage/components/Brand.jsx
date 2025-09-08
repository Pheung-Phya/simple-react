import { Link } from "react-router-dom"

const Brand = ({brands}) => {
  return (
        <div className="row">

            {
                brands.map((value, index) => {
                    return (
                        <Link className="col " key={index}>
                            <img className="w-100 rounded-3 border" src={value.logo} alt={value.name} height="150" />
                        </Link>
                    )
                })
            }




        </div>
    )
}

export default Brand