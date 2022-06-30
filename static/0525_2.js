var correct = ["권민우", "컴퓨터공학과", "절차", "객체", "벌"];

setTimeout(timeOut, 15000)

function submit(){
    var answer = [];
    var cnt = 0;
    for(var i = 0; i < 5;i++){
        answer[i] = document.getElementById(i+1 + "_tf").value
    }
    for(var i = 0; i < 5; i++){
        if(answer[i] == correct[i]){ 
            document.getElementById(i+1 + "li").style.color = "blue"
            cnt++;
        }else{
            document.getElementById(i+1 + "li").style.color = "red"
        }
    }


    document.getElementById("result").innerHTML = "정답: " + cnt + "/5 " + correct[0] + ", " + correct[1] + ", "
    + correct[2] + ", " + correct[3] + ", " + correct[4]
}

function timeOut(){
    document.getElementById("timeout").innerHTML = "시간 초과"
    submit();
}
