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
		//�ѹ��� ������ ������ 1 �ڷ� 1 ������ 5�̵��Ѵ�
		// �ּ� ��� �����ؾ� �۾��� �������� �� �� �ִ��� ���ϱ�
		// ex 5 14 3
		// ������ġ �۾��� ��ġ 3������ ����
		BFS(5);
	}
}
