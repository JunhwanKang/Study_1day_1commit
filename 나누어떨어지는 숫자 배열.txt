import java.util.*;
class Solution {
    public Integer[] solution(int[] arr, int divisor) {
        Integer[] answer;
        ArrayList<Integer> list = new ArrayList<>();
        
        for(int i=0; i<arr.length; i++){
            if(arr[i] % divisor == 0)
                list.add(arr[i]);
        }
        if(list.size() == 0)
            list.add(-1);

        answer = list.toArray(new Integer[list.size()]);
        
        Arrays.sort(answer);
        return answer;
    }
}