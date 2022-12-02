import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//components


const TextCopy = ({link}) => {

    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }
    const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
        copyTextToClipboard(link)
        .then(() => {
            // If successful, update the isCopied state value
            setIsCopied(true);
            setTimeout(() => {
            setIsCopied(false);
            }, 1500);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return(
        <div className="text-copy">
            {/* <input type="text" value={link} readOnly /> */}
            <h2 onClick={handleCopyClick}>{isCopied ? 'Copied!  ' : 'Copy Link'}</h2>
        </div>
    );
};

export default TextCopy;