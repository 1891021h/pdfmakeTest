// 連想配列で content にPDF出力用のデータを設定
var pdfContent = {content: "This is pdfmake test. これはpdfmakeのテストです。"};

// pdfmakeで content を設定した変数を引数としてPDF生成
pdfMake.createPdf(pdfContent).open();