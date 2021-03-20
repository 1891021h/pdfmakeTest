// フォント情報として、ゴシックと明朝を定義
pdfMake.fonts = {
    IPAgothic: {
        normal:      'ipagp.ttf',
        bold:        'ipagp.ttf',
        italics:     'ipagp.ttf',
        bolditalics: 'ipagp.ttf'
   },
    IPAmincho: {
        normal:      'ipamp.ttf',
        bold:        'ipamp.ttf',
        italics:     'ipamp.ttf',
        bolditalics: 'ipamp.ttf'
   }
}

// JSON形式で content にPDF出力用のデータを設定
var pdfContent = {
    content: [
        { text: "This is pdfmake test."},
        { text: "これは等幅ゴシック体(ipagp.tff)のテストです。", font: "IPAmincho"},
        { text: "これは等幅明朝体(ipamp.tff)のテストです。", font: "IPAgothic"}
   ],
   // デフォルトフォントを等幅ゴシック体に変更
   defaultStyle: {
       font: "IPAgothic"
   }
}

// pdfmakeで content を設定した変数を引数としてPDF生成
pdfMake.createPdf(pdfContent).open();