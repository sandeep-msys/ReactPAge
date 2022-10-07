// import Tips from "../views/Tips/Tips";
import "./DataManage.css";
const DataManage = (props) => {
  return (
    <>
      {props.data.map((item) => {
        return (
          <div>
            {item.h1 ? <h1>{item.h1}</h1> : <h2>{item.h2}</h2>}

            {item.pl ? (
              <h4 className="light-colored-paragraph">{item.pl}</h4>
            ) : null}
            {item.pl1 ? (
              <h4 className="light-colored-paragraph">{item.pl1}</h4>
            ) : null}

            {item.p ? <p>{item.p}</p> : null}
            {item.p1 ? <p>{item.p1}</p> : null}
            {item.p2 ? <p>{item.p2}</p> : null}
            {item.p3 ? <p>{item.p3}</p> : null}
            {item.p4 ? <p>{item.p4}</p> : null}
            {item.p5 ? <p>{item.p5}</p> : null}
            {item.s ? <strong>{item.s}</strong> : null}
            {item.list
              ? item.list.map((li) => {
                  return (
                    <ul>
                      <li>
                        <span>{li}</span>
                      </li>
                    </ul>
                  );
                })
              : null}
            {item.tiptitle ? (
              <div className="Tips-container">
                <p className="Tip-title">{item.tiptitle}</p>
                <p>{item.tipparagraph}</p>
              </div>
            ) : null}
            {item.hr ? <hr /> : null}
          </div>
        );
      })}
    </>
  );
};
export default DataManage;

//  let p='React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.'
//  let s= ['you can use as little or as much React as you need']

// const highlight = (paragraph, strong) => {
//   if (paragraph.includes(strong)) {
//       paragraph = paragraph.replaceAll(strong, `<strong>${strong}</strong>`)
//   }
//   return paragraph
// }

/* {s.map((each)=>{return(highlight(p,each))})} */

// <div className='Docs-container'>
//     {dummydata.map((item)=>
//      <div >
//     {item.header1 ? <h1>{item.header1}</h1>:<h2>{item.header2}</h2>}
//     {item.description ? <p>{item.description}</p>:null}

//     {/* {item.anchor.map((eachitem) =>
//     <>
//     <p dangerouslySetInnerHTML={{__html:item.description.replace(eachitem,`<a href="/">${eachitem}</a>`)}}/>
//     </>)} */}
//          {(item.list1  || item.list2) ?  <ul>
//              <li><p>{item.lis1}</p></li>
//              <li><p>{item.list2}</p></li>
//          </ul>:null}
//     {item.description1 ? <p>{item.description1}</p> : null}
//      </div>
//      )
//      }
//     </div>
// {/* <div className='tutorial-container'>
//                 {dummydata.map((eachitem)=>
// {eachitem.anchor.map((each)=>{
//     let i = 0;
//     let result = ''
//     while(i>= 0){
//         let newindex = eachitem.description.indexOf(each,i);
//         console.log(eachitem.description)
//         console.log('newindex',newindex)
//         console.log('result',result)
//         console.log('i',i)
//         console.log(each)
//         result = eachitem.description.substring(i,newindex+1)
//         +   `<strong>${each}</strong>`
//         +  eachitem.description.substring(newindex + each.length,each.description.length)
//         i = newindex+each.length;
//         console.log('newindex---',newindex)
//         console.log('result---',result)
//         console.log('i---',i)
//         console.log(each)
//             }})})}
//             </div> */}

// {dummydata.map((eachitem, index) => {
//     return(
//     <div key={index}>
//     <h2> {eachitem.description}</h2>
//     {eachitem.anchor.map((each, index) => {
//             return (
//             <div key={index}>
//             <h4>{each}</h4>
//             </div>
//             );
//         })}
//     </div> )})}

/* <div>

 </div> */
// do {
//     newindex = eachitem.description.indexOf(each,i);
//     result = eachitem.description.substring(i,newindex) +
//              `<strong>${each}</strong>` +
//             eachitem.description.substring(newindex + each.length,each.description.length)
//     // return result
//     i = newindex+each.length;
//   } while (i >=0 )
// //   <><p>{result}</p></>
// console.log(newindex)
// console.log(result)
// })}
