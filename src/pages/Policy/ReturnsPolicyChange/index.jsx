import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const ReturnsPolicyChange = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HelmetProvider>
            <Container className='returns-policy-change'>
                <Helmet>
                    <title>Chính sách dổi trả</title>
                </Helmet>
                <Row>
                    <Col xs={12} lg={12} md={12} sm={12}>
                        <h1>Chính sách đổi trả</h1>
                        <ul>
                            <li>BIBEO AUTHENTIC cam kết các sản phẩm bán đều là hàng chính hãng 100%  nhập từ US, UK, JP, v.v. Do vậy, chúng mình chỉ nhận trả nếu hàng không đúng với cam kết trên.</li>
                            <li>Tất cả các sản phẩm mua tại BIBEO AUTHENTIC được đổi trong vòng 3 (ba) ngày ( thời gian này chỉ áp dụng cho các bạn mua hàng tại shop). Đối với khách hàng ở xa, vui lòng liên hệ shop qua số điện thoại trên website để được hỗ trợ và tư vấn cụ thể.</li>
                            <li>Thời gian nhận đổi linh hoạt. Tốt nhất Quý khách hãy liên hệ trước với shop 1 ngày để shop chuẩn bị tốt hơn.</li>
                            <li>Chỉ đổi hàng còn nguyên vẹn, chưa qua sử dụng, vẫn còn tem tag.</li>
                            <li>Chỉ nhận đổi nếu hàng không đúng mô tả sản phẩm, size không vừa.</li>
                            <li>Chỉ đổi hàng có giá trị tương đương hoặc cao hơn (nếu cao hơn quý khách vui lòng bù thêm khoản chênh lệch). Shop sẽ linh động để hỗ trợ Quý khách tốt hơn.</li>
                            <li>Quý khách đổi hàng vui lòng mang theo hóa đơn mua hàng. Đối với quý khách ở xa, các bạn vui lòng liên hệ để xác nhận đơn hàng đã mua qua điện thoại, Zalo hoặc inbox FaceBook. Trường hợp đổi hàng vì size không vừa, quý khách vui lòng thanh toán phí giao nhận. BIBEO sẽ tư vấn cách thức gửi hàng tiết kiệm chi phí nhất.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    )
}

export default ReturnsPolicyChange