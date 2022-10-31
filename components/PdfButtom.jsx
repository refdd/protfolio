import React from 'react'
function PdfButtom() {
     // Function will execute on click of button
     const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("mohamedRefat.pdf").then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "mohamedRefat.pdf";
                alink.click();
            })
        })
    }
    return (
        <>
        <p className='py-3 text-xl underline capitalize font-bold font-serif'>Click on below button to download cv PDF file</p>
            <button className='px-3 py-2' onClick={onButtonClick}>
                Download cv
            </button>
    </>
      )
}

export default PdfButtom