 const FileTypes = {
    png: [
        'gif', 'jpg', 'pdf', 'pdfa', 'png', 'pnm', 'svg', 'tiff', 'watermark', 'webp',
    ],
    pdf:[
        'compress', 'csv', 'decompress', 'decrypt', 'delete-pages','encrypt', 'extract-images', 'jpg', 'merge', 'meta', 'ocr', 'pdfa', 'png', 'rasterize', 'repair', 'rotate', 'split', 'squeeze', 'tiff', 'tiff-fax', 'txt', 'watermark', 'webp', 
    ],
    csv:[
        'jpg', 'numbers', 'pdf', 'pdfa', 'png', 'tiff', 'webp', 'xls', 'xlsx',
    ],
    doc:[
        'docx', 'html', 'jpg', 'mhtml', 'odt', 'pages', 'pdf', 'pdfa', 'png', 'tiff', 'rtf', 'txt', 'webp', 'xml', 'xps'
    ],
    fax:[
        'jpg', 'pdf', 'pdfa', 'png', 'pnm', 'svg', 'tiff', 'webp'
    ],
    gif:[
        'jpg', 'pdf', 'pdfa', 'png', 'pnm', 'svg', 'tiff', 'webp'
    ],
    html:[
        'docx', 'jpg', 'md', 'odt', 'pdf', 'png', 'txt', 'xls', 'xlsx'
    ],
    images:[
        'pdf',
    ],
    jpg:[
        'compress', 'gif', 'jpg', 'pdf', 'pdfa', 'png', 'pnm', 'svg', 'tiff', 'watermark', 'webp',
    ],
    ico:[
        'jpg', 'pdf', 'pdfa', 'png', 'pnm', 'svg', 'tiff','webp'
    ],
    svg:[
        'jpg', 'pdf', 'png', 'pnm', 'tiff', 'webp', 
    ],
    jpeg:[
        'jpg', 'pdf', 'pdfa', 'png', 'pnm', 'svg', 'tiff', 'webp',
    ],
    zip:[
        'extract'
    ]
}

module.exports = FileTypes;