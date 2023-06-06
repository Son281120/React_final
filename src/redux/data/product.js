const initialProductState = [
    {
        "id": 1,
        "name": "Giày Nike Air Max 1",
        "image": [
            "https://example.com/images/nike_air_max_1_1.jpg",
            "https://example.com/images/nike_air_max_1_2.jpg",
            "https://example.com/images/nike_air_max_1_3.jpg",
            "https://example.com/images/nike_air_max_1_4.jpg"
        ],
        "quantity": 10,
        "description": "Đôi giày Nike Air Max 1 với thiết kế hiện đại và phong cách đẳng cấp. Được làm bằng chất liệu cao cấp, thoáng khí và êm ái cho đôi chân."
    },
    {
        "id": 2,
        "name": "Giày Nike Air Jordan 1",
        "image": [
            "https://example.com/images/nike_air_jordan_1_1.jpg",
            "https://example.com/images/nike_air_jordan_1_2.jpg",
            "https://example.com/images/nike_air_jordan_1_3.jpg",
            "https://example.com/images/nike_air_jordan_1_4.jpg"
        ],
        "quantity": 8,
        "description": "Giày Nike Air Jordan 1 - một biểu tượng của văn hóa sneaker. Được thiết kế với sự tinh tế, phong cách và sự thoải mái, thích hợp cho mọi hoạt động."
    },
    {
        "id": 3,
        "name": "Giày Nike Free Run",
        "image": [
            "https://example.com/images/nike_free_run_1.jpg",
            "https://example.com/images/nike_free_run_2.jpg",
            "https://example.com/images/nike_free_run_3.jpg",
            "https://example.com/images/nike_free_run_4.jpg"
        ],
        "quantity": 5,
        "description": "Đôi giày Nike Free Run với đế giày linh hoạt và êm ái, giúp bạn cảm nhận sự tự do khi vận động. Được thiết kế cho những buổi chạy bộ hoặc tập luyện hàng ngày."
    },
    {
        "id": 4,
        "name": "Giày Nike Air Force 1",
        "image": [
            "https://example.com/images/nike_air_force_1_1.jpg",
            "https://example.com/images/nike_air_force_1_2.jpg",
            "https://example.com/images/nike_air_force_1_3.jpg",
            "https://example.com/images/nike_air_force_1_4.jpg"
        ],
        "quantity": 12,
        "description": "Đôi giày Nike Air Force 1 - một biểu tượng trong làng sneaker. Với thiết kế cổ điển và chất liệu bền bỉ, giày này sẽ là lựa chọn tuyệt vời cho mọi người."
    },
    {
        "id": 5,
        "name": "Giày Nike Roshe Run",
        "image": [
            "https://example.com/images/nike_roshe_run_1.jpg",
            "https://example.com/images/nike_roshe_run_2.jpg",
            "https://example.com/images/nike_roshe_run_3.jpg",
            "https://example.com/images/nike_roshe_run_4.jpg"
        ],
        "quantity": 3,
        "description": "Giày Nike Roshe Run với kiểu dáng đơn giản nhưng không kém phần tinh tế. Chất liệu thoáng khí và đế giày êm ái, mang lại cảm giác thoải mái suốt cả ngày."
    },
    {
        "id": 6,
        "name": "Giày Nike Zoom Pegasus",
        "image": [
            "https://example.com/images/nike_zoom_pegasus_1.jpg",
            "https://example.com/images/nike_zoom_pegasus_2.jpg",
            "https://example.com/images/nike_zoom_pegasus_3.jpg",
            "https://example.com/images/nike_zoom_pegasus_4.jpg"
        ],
        "quantity": 6,
        "description": "Giày Nike Zoom Pegasus với công nghệ tiên tiến và thiết kế đẹp mắt. Đây là một đôi giày chạy bộ lý tưởng cho mọi người, từ người mới tập luyện đến những vận động viên chuyên nghiệp."
    },
    {
        "id": 7,
        "name": "Giày Nike Air Max 90",
        "image": [
            "https://example.com/images/nike_air_max_90_1.jpg",
            "https://example.com/images/nike_air_max_90_2.jpg",
            "https://example.com/images/nike_air_max_90_3.jpg",
            "https://example.com/images/nike_air_max_90_4.jpg"
        ],
        "quantity": 15,
        "description": "Giày Nike Air Max 90 với thiết kế đặc trưng và đệm Max Air tối đa. Đây là một sự lựa chọn tuyệt vời cho những người yêu thích sự thoải mái và phong cách."
    },
    {
        "id": 8,
        "name": "Giày Nike Cortez",
        "image": [
            "https://example.com/images/nike_cortez_1.jpg",
            "https://example.com/images/nike_cortez_2.jpg",
            "https://example.com/images/nike_cortez_3.jpg",
            "https://example.com/images/nike_cortez_4.jpg"
        ],
        "quantity": 7,
        "description": "Giày Nike Cortez với thiết kế cổ điển và đường may tỉ mỉ. Đây là một đôi giày phù hợp với nhiều phong cách và dịp khác nhau."
    },
    {
        "id": 9,
        "name": "Giày Nike React Element 55",
        "image": [
            "https://example.com/images/nike_react_element_55_1.jpg",
            "https://example.com/images/nike_react_element_55_2.jpg",
            "https://example.com/images/nike_react_element_55_3.jpg",
            "https://example.com/images/nike_react_element_55_4.jpg"
        ],
        "quantity": 9,
        "description": "Giày Nike React Element 55 với thiết kế hiện đại và công nghệ React đáng tin cậy. Đôi giày này mang đến sự thoải mái và phong cách độc đáo."
    },
    {
        "id": 10,
        "name": "Giày Nike Blazer Mid",
        "image": [
            "https://example.com/images/nike_blazer_mid_1.jpg",
            "https://example.com/images/nike_blazer_mid_2.jpg",
            "https://example.com/images/nike_blazer_mid_3.jpg",
            "https://example.com/images/nike_blazer_mid_4.jpg"
        ],
        "quantity": 4,
        "description": "Giày Nike Blazer Mid với thiết kế vintage và phong cách thời trang. Đôi giày này thích hợp cho cả nam và nữ, làm tăng thêm điểm nhấn cho bất kỳ bộ trang phục nào."
    }
];


export default initialProductState