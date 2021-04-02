// 첫번째 script -
//
// gs.info('hellow world');
//
// //
//
//
// 두번쨰 테이블 조회해서 가져오기
// var gr = new GlideRecord('task');
// gr.addActiveQuery();
// gr.query();
//
// while (gr.next()){
//   gs.info(gr.getValue('number'));
//
// }

//
// var gr = new GlideRecord('incident');
// gr.addActiveQuery();
// gr.query();
//
// while (gr.next()){
//   if(gr.getValue('number')=="INC0010001"){
//     gs.info("여기 들어왔다");
//     var test=gr.getValue('description');
//     const words = test.split(' ');
//     for()
//     gs.info(words);
//   }else{
//     // gs.info(gr.getValue('number')+gr.getValue('description'));
//
//   }
// }
// -------- client scripts
// function onLoad(){
//   alert('Current state value is ' + g_from.getValue('state'));
//
// }
