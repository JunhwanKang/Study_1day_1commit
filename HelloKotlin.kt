class HelloKotlin {
}
fun main() {

    var str: String? = "ABC";
    println(str?.length); // 널이지 않은 경우에만 실행해줌 (safe call) 값이 null이면 null
    //Elvis연산자
    println(str?.length ?: 0) // null이면 0으로 출력 (java의 3항 연산자와 유사한듯)
}

fun startsWithA1(str :String?) : Boolean{
  /*  if(str == null){
        throw java.lang.IllegalArgumentException("null이 들어왔습니다");
    }
    return str.startsWith("A");*/
    return str?.startsWith("A") ?: throw IllegalArgumentException("null이 들어왔습니다.");
}

fun startsWithA2(str :String?): Boolean?{
    /*if(str == null){
        return null;
    }
    return str.startsWith("A");*/
    return str?.startsWith("A");
}

fun startsWithA3(str : String?): Boolean{
    /*if(str == null){
        return false;
    }
    return str.startsWith("A");*/
    return str?.startsWith("A") ?: false
}

fun startsWith(str: String?): Boolean{
    // 널 아님 단언 : 이것은 null이 아니라고 확신할 경우에만 사용 null이 들어오면 NPE
    return str!!.startsWith("A")
}