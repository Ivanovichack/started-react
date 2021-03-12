import React from "react";

export default function w(props){
    var date = new Date(parseInt(props.tiempo,10));
    var adate = date.getDate() + '/' + (date.getMonth() + 1);
    return (
        <div>
            {adate}
        </div>
    );
}
