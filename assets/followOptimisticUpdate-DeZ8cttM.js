function r(r,t,o){return r.map(r=>{if(r.post.uri!==t)return r;const e=r.post,n=e.author;return{...r,post:{...e,author:{...n,viewer:{...n.viewer,following:o}}}}})}export{r as p};
