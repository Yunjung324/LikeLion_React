import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

function RouteSolve() {
    return (
        <BrowserRouter>
            <h1>퀴즈</h1>
            <Link to="/"> home </Link>
            <br/>
            <Link to="/one"> one </Link>
            <br/>
            <Link to="/two"> two </Link>
            <br/>
            <Link to="/three"> three </Link>
            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/products/:id/notice" element={<ProductsNotice />} />
                <Route path="/cart" element={<Cart name='licat' />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/coupon" element={<div>쿠폰</div>} />
                <Route path="/users/question" element={<div>문의</div>} />
                <Route path="/users/notice" element={<div>공지</div>} />

                <Route path="/three/*" element={<Outlet />}>
                    <Route path="" element={<HojunIndex />} />
                    <Route path="hojunone/" element={<HojunOne />} />
                    <Route path="hojuntwo/" element={<HojunTwo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Homepage() {
    return <h1>홈페이지</h1>
}

function Cart({ name }) {
    return <h1>{name} world1</h1>
}

function Users() {
    return <h1>hello world2</h1>
}

function Three() {
    return (
        <div>
            <h1>여기는 쿠폰</h1>
        </div>
    )
}

function Products() {
    const {id} = useParams();
    return <h1>hello Products {id}</h1>
}

function ProductsNotice() {
    const location = useLocation();
    console.log(location)
    return <h1>hello Products</h1>
}

function HojunIndex() {
    const location = useLocation();
    console.log(location)
    return <h1>hello Hojun index</h1>
}

function HojunOne() {
    const location = useLocation();
    console.log(location)
    return <h1>hello Hojun 1</h1>
}

function HojunTwo() {
    const location = useLocation();
    console.log(location)
    return <h1>hello Hojun 2</h1>
}

export default RouteSolve;