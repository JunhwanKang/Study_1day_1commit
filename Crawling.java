import java.io.IOException;
import java.util.Iterator;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Crawling {
	public static void main(String[] args) {
		// ��ũ���� url�� �־��ݴϴ�.
		String url = "https://ko.wiktionary.org/w/index.php?title=%EB%B6%84%EB%A5%98:%ED%95%9C%EA%B5%AD%EC%96%B4_%EB%AA%85%EC%82%AC&from=%EA%B0%80";
		// ���⿡ ��ü�� HTML�� ��� ����
		Document doc = null;
		// �ܾ� ���� ���ڸ� ������ (�ʿ���µ� �������� Ȯ���� ���ؼ� �׳� ������)
		int count = 0;
		
		try {
			// jsoup�� �̿��ؼ� url�� document�� ����
			doc = Jsoup.connect(url).get();
		} catch (IOException e) {
			e.printStackTrace();
		}
		// class = "mw-category"�� �ִ°��� ��� element�� ����
		Elements element = doc.select(".mw-category");    
		// .mw-category-group > ul > li > a�� �ش��ϴ� element�� ie�� ����
		Iterator<Element> ie = element.select(".mw-category-group > ul > li > a").iterator();
		// �ݺ������� ��� ��θ� ���  && ī����      
		while (ie.hasNext()) { 
			count++;
			System.out.println(ie.next().text()+"\t");
		}
		System.out.println("count : "+ count);
		
	}
}
