import React from 'react';
import '../styles/DownloadSection.css'; // Ensure you create this CSS file for styling

const DownloadSection = () => {
    const appStoreLink = "https://www.apple.com/in/app-store/"; // Replace with your App Store link
    const googlePlayLink = "https://play.google.com/store/apps?hl=en_IN"; // Replace with your Google Play Store link
    // const barcodeImageUrl = "https://www.google.com/imgres?q=dummy%20barcode%20image&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1347277582%2Fvector%2Fqr-code-sample-for-smartphone-scanning-on-white-background.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D6e6Xqb1Wne79bJsWpyyNuWfkrUgNhXR4_UYj3i_poc0%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffake-qr-code&docid=zem6AGD-QmlUfM&tbnid=yh_PeOk8RnerLM&vet=12ahUKEwir_97QksKIAxU1TGwGHWHIJPwQM3oFCIQBEAA..i&w=612&h=612&hcb=2&ved=2ahUKEwir_97QksKIAxU1TGwGHWHIJPwQM3oFCIQBEAA"; // Replace with your barcode image URL
    const mobileImageUrl = "https://cdn.dribbble.com/userupload/14890840/file/original-433566b0e026e3d753658e3c634799f2.png?resize=752x"; // Replace with your mobile photo image URL
    return (
        <>
        <h2 > Download the App Now</h2>
        <div className="download-section">
        {/* <h2> Download the App Now</h2> */}
        {/* <div className='wrap'> */}
            <div className="mobile-photo-container">
                <img src={mobileImageUrl} alt="Mobile" className="mobile-photo" />
            </div>
            <div className="download-buttons-container">
                <a href={appStoreLink} className="download-button app-store" target="_blank" rel="noopener noreferrer">
                <img src="http://localhost:3000/Assets/appstore.jpeg" alt="App Store"/>
                <button type="button" class="btn btn-dark">App Store</button>
                </a>
                <a href={googlePlayLink} className="download-button google-play" target="_blank" rel="noopener noreferrer">
                <img src="http://localhost:3000/Assets/playstore.png" alt="Play Store"/>
                <button type="button" class="btn btn-dark">Play Store</button>
                
                </a>
                <div className="barcode-container">
                <img src="http://localhost:3000/Assets/barcode.png" alt="Scan this code to download" className="barcode-image" />
                <button type="button" class="btn btn-dark">Scan Now </button>
                </div>

            </div>
         </div>
        {/* </div> */}
        
        </>
        
    );
};

export default DownloadSection;
