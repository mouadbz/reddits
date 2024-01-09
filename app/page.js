"use client";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LinkComponent = () => {
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [extraButton, setExtraButton] = useState("PREDEFINED TEXT");

  const generateLink = async () => {
    const data = await fetch("/api/generate").then((res) =>
      res.json().catch((err) => {
        console.log("here", err);
        toast.error("Link is not available right now. Please try again later.");
        alert(err.error);
        return;
      })
    );

    setLink(data.link);
    setCopied(false);
    setDisabled(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
  };

  const handleExtraButtonClick = () => {
    navigator.clipboard.writeText('I found a solution by using agency accounts. This problem mostly happens due to credit card issues, sometimes involving name or location mismatches. After trying many accounts and sending numerous appeals without success, I turned to agency accounts. Here is an article on Reddit that explains how they work and how to obtain them.\nhttps://www.reddit.com/r/agencyaccs/comments/19183o5/google_agency_accounts/');
    setExtraButton("Copied!");
  
  

    // Set a timeout to change the button back to its initial state after 1000 milliseconds (1 second)
    setTimeout(() => {
      setExtraButton("COPY COMMENT");
    }, 1000);
  };

  return (
    <div className="items-centerflex flex-col mt-10">
      <div className="items-center space-y-5 flex flex-col">
        <Image
          src="/reddit.png"
          alt="Get Reddit Link"
          width={100}
          height={24}
          priority
        />
        <div className="text-[#fffff] text-2xl font-bold">Get Reddit Link</div>
      </div>
      <div className="p-4 flex flex-col items-center space-y-3">
        <button
          onClick={generateLink}
          disabled={disabled}
          style={{ backgroundColor: disabled ? "gray" : "#d93b01" }}
          className="bg-[#d93b01]-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Link
        </button>
        <input
          type="text"
          value={link}
          readOnly
          href={link}
          className="p-2 border border-gray-300 rounded w-full md:w-1/2 text-[#d93b01]"
        />
        <div className="flex space-x-2">
          <button
            onClick={() => {
              const newWindow = window.open(
                link,
                "_blank",
                "noopener,noreferrer"
              );
              if (newWindow) newWindow.opener = null;
            }}
            disabled={!disabled}
            style={{ backgroundColor: disabled ? "#d93b01" : "gray" }}
            className="bg-[#d93b01]-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Open post Link
          </button>
          <button
            onClick={copyToClipboard}
            style={{ backgroundColor: "white" }}
            className="bg-green-500 hover:bg-green-700 text-[#d93b01] font-bold py-2 px-4 rounded"
          >
            {copied ? (
              "Copied!"
            ) : (
              <div className="flex">
                <p className="mr-2">Copy</p>
                <Image
                  src="/copy.png"
                  alt="Copy"
                  width={25}
                  height={25}
                  priority
                />
              </div>
            )}
          </button>
        </div>
        <div>
          <button
            onClick={handleExtraButtonClick}
            disabled={extraButton === "Copied!"}
            style={{
              backgroundColor: extraButton === "Copied!" ? "white" : "rgb(217, 59, 1)",
              color: extraButton === "Copied!" ? "rgb(217, 59, 1)" : "white",
              transition: "background-color 0.5s ease, color 0.5s ease",
            }}
            className="hover:bg-green-700 text-[#d93b01] font-bold py-2 px-4 rounded"
          >
            {extraButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkComponent;
