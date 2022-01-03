import java.io.IOException;
import java.util.Iterator;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Crawling {
	public static void main(String[] args) {
		// 스크랩할 url을 넣어줍니다.
		String url = "https://ko.wiktionary.org/w/index.php?title=%EB%B6%84%EB%A5%98:%ED%95%9C%EA%B5%AD%EC%96%B4_%EB%AA%85%EC%82%AC&from=%EA%B0%80";
		// 여기에 전체의 HTML이 담길 예정
		Document doc = null;
		// 단어 마다 숫자를 세어줌 (필요없는데 육안으로 확인을 위해서 그냥 넣음ㅋ)
		int count = 0;
		
		try {
			// jsoup을 이용해서 url의 document를 저장
			doc = Jsoup.connect(url).get();
		} catch (IOException e) {
			e.printStackTrace();
		}
		// class = "mw-category"에 있는것을 모두 element에 저장
		Elements element = doc.select(".mw-category");    
		// .mw-category-group > ul > li > a에 해당하는 element만 ie에 담음
		Iterator<Element> ie = element.select(".mw-category-group > ul > li > a").iterator();
		// 반복문으로 요소 모두를 출력  && 카운팅      
		while (ie.hasNext()) { 
			count++;
			System.out.println(ie.next().text()+"\t");
		}
		System.out.println("count : "+ count);
		
	}
}
