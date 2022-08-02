const data = [
    {
        name: "Thời sự",
        path: '/thoi-su',
        child: [
            {
                name: 'Chí trị',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Dân sinh',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Lao động - Việc làm',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Giao thông',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Góc nhìn",
        path: '/goc-nhin',
        child: [
            {
                name: 'Bình luận nhiều',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Chính trị & chính sách',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Y tế & sức khỏe',
                path: '/thoi-su/binh-luan-nhieu'
            }
            ,
            {
                name: 'Kinh doanh & quản trị',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Thế giới",
        path: '/the-gioi',
        child: [
            {
                name: 'Tư liệu',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Phân tích',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Người Việt 5 châu',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Cuốc sống đó đây',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Video",
        path: '/video',
        child: [
            {
                name: 'Thời sự',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Nhịp sống',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Food',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Tôi kể',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Podcasts",
        path: '/podcasts',
        child: [
            {
                name: 'VnExpress hôm nay',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Họ nói gì',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Hộp đen',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Ly hôn',
                path: '/thoi-su/binh-luan-nhieu'
            },

        ]
    },
    {
        name: "Kinh doanh",
        path: '/kinh-doanh',
        child: [
            {
                name: 'Quốc tế',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Doanh nghiệp',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Chứng khoán',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Bất động sản',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Khoa học",
        path: '/khoa-hoc',
        child: [
            {
                name: 'Khoa học trong nước',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Tin tức',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Phát minh',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Ứng dụng',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Giải trí",
        path: '/thể thao',
        child: [
            {
                name: 'Giới sao',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Video',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Phim',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Nhạc',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Thể thao",
        path: '/thể thao',
        child: [
            {
                name: 'Bóng đá',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Marathon',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Lịch thi đấu',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Tennis',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Pháp luật",
        path: '/thể thao',
        child: [
            {
                name: 'Hồ sơ phá án',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Tư vấn',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Video',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Giáo dục",
        path: '/thể thao',
        child: [
            {
                name: 'Tin tức',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Tuyển sinh',
                path: '/thoi-su/binh-luan-nhieu'
            }
            ,
            {
                name: 'Chân dung',
                path: '/thoi-su/binh-luan-nhieu'
            }
            ,
            {
                name: 'Du học',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Sức khỏe",
        path: '/thể thao',
        child: [
            {
                name: 'Tin tức',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Tư vấn',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Dinh dưỡng',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Khỏe đẹp',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Đời sống",
        path: '/thể thao',
        child: [
            {
                name: 'Tổ ấm',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Bài học sống',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Nhà',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Tiêu dùng',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Du lịch",
        path: '/thể thao',
        child: [
            {
                name: 'Điểm đến',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Ẩm thực',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Dấu chân',
                path: '/thoi-su/binh-luan-nhieu'
            },
            {
                name: 'Tư vấn',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Số hóa",
        path: '/thể thao',
        child: [
            {
                name: 'Bình luận nhiều',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Xe",
        path: '/thể thao',
        child: [
            {
                name: 'Bình luận nhiều',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Ý kiến",
        path: '/thể thao',
        child: [
            {
                name: 'Bình luận nhiều',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Tâm sự",
        path: '/thể thao',
        child: [
            {
                name: 'Bình luận nhiều',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
    {
        name: "Hài",
        path: '/thể thao',
        child: [
            {
                name: 'Bình luận nhiều',
                path: '/thoi-su/binh-luan-nhieu'
            }
        ]
    },
]

export default data