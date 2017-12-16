$(function () {
 var data=[
     {"id":0,"name":"clsoco","type":"路由器","date":"2017-12-01"},
     {"id":1,"name":"clsoco1","type":"路由器","date":"2017-12-02"},
     {"id":2,"name":"clsoco2","type":"路由器","date":"2017-12-03"},
     {"id":3,"name":"clsoco3","type":"路由器","date":"2017-12-04"},
     {"id":4,"name":"clsoco4","type":"路由器","date":"2017-12-05"},
     {"id":5,"name":"clsoco5","type":"路由器","date":"2017-12-06"},
     {"id":6,"name":"clsoco6","type":"路由器","date":"2017-12-07"},
     {"id":7,"name":"clsoco7","type":"路由器","date":"2017-12-08"},
     {"id":8,"name":"clsoco8","type":"路由器","date":"2017-12-09"},
     {"id":9,"name":"clsoco9","type":"路由器","date":"2017-12-10"},
     {"id":10,"name":"clsoco10","type":"路由器","date":"2017-12-11"},
 ];
 var html='';
    for(i=0;i<data.length;i++){
        var obj=data[i];
        html+=`
            <tr>
            <td id="${obj.id}"><input type="radio" name="sz"></td>
            <td>${obj.name}</td>
            <td>${obj.type}</td>
            <td>${obj.date}</td>
            </tr>>
        `;
    }
    $('#t1 tbody').html(html);


    //删除
    $('#btn1').click(function () {
        console.log('111');
        var id=$('input:checked').parent().attr('id');

        //$('input:checked').parent().parent().remove();
        $.ajax({
            type:'DELETE',
            url:'http://10.65.162.91:8002/api/values/'+id,
            success:function(data){
                if(data.success){
                    //成功之后删除行
                    $('input:checked').parent().parent().remove();
                }else {
                    //提示
                    alert(data.msg);
                }

            }
        })
    })

    //查找
    $('#btn2').click(function(){
        var name=$('input[type=text]').val();
        $.ajax({
            type:'GET',
            url:'http://10.65.162.91:8002/api/values/fliter?name='+name,
            success:function (data) {
                if(data.success){

                }
            }
        })
        
    })

});