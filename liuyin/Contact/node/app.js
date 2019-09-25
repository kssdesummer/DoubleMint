const path= require('path');
const mime=require('mime');
const fs=require('mz/fs');
function staticFiles(url,dir){
    return async(ctx,next)=>{
        let rpath=ctx.request.path;
        if(rpath.startsWith(url)){
            let fp=path.join(fir,rpath.substring(url.length));
            if(await fs.exists(fp)){
                
            }
        }

    }
}