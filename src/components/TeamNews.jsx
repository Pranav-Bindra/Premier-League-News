import React from 'react';

export const TeamNews = ({ articles }) => {
  return (
    <div className="space-y-4 ml-6 mt-6">
      {articles.map((article, index) => {
        // Split the title into two parts
        const titleParts = article.title.split('published');
        const title = titleParts[0].trim(); 
        let publishedInfo = titleParts[1] ? titleParts[1].trim() : ''; 

        if (publishedInfo) {
          const halfIndex = Math.floor(publishedInfo.length / 2) + 1;
          const firstHalf = publishedInfo.substring(0, halfIndex).trim();
          publishedInfo = firstHalf; 
        }

        return (
          <div key={index} className="p-4 rounded-lg shadow-md bg-slate-100 hover:bg-slate-200">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            {publishedInfo && <p className="text-sm text-gray-500 mb-2">Published {publishedInfo}</p>}
            <p className="text-gray-700">{article.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamNews;
