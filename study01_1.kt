fun main(){
    val person = Person("홍길동")
    nameLength(person.name)
}

fun nameLength(str: String): Int{
    return str.length;
}

