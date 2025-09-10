import { Link } from "react-router-dom"

interface BrandType {
    slug: string;
    logo: string;
    name: string;
}



interface BrandProps {
    brands: BrandType[];
}

const Brand: React.FC<BrandProps> = ({ brands }) => {
  return (
        <div className="row">

            {
                brands.map((value, index) => {
                    return (
                        <Link className="col " to={`/products/${value.slug}`} key={index}>
                            <img className="w-100 rounded-3 border" src={value.logo} alt={value.name} height="150" />
                        </Link>
                    )
                })
            }




        </div>
    )
}

export default Brand