package algorithm;

import java.util.LinkedList;
import java.util.Queue;

public class Ex02 {
	static int k = 14;
	public static void BFS(int n) {
		Queue<Integer> q = new LinkedList<>();
		q.offer(n);
		int L=0;
		if(!q.isEmpty()) {
			int len = q.size();
			for(int i=0; i<len; i++) {
				if(q.poll() == k)
					System.out.println(L);
				q.offer(n+1);
				q.offer(n-1);
				q.offer(n+5);
			}
			L++;
		}
	}
	
	public static void main(String[] args) {
		//한번의 점프로 앞으로 1 뒤로 1 앞으로 5이동한다
		// 최소 몇번 점프해야 송아지 위차가지 갈 수 있는지 구하기
		// ex 5 14 3
		// 현수위치 송아지 위치 3번만에 도착
		BFS(5);
	}
}
