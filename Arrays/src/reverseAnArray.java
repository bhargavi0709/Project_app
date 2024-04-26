import java.util.Arrays;
import java.util.Scanner;

import static java.util.Collections.swap;

public class reverseAnArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = {23, 5, 6, 90, 6, 2, 4};
        int start=0;
        int end = arr.length-1;
        swap(arr, start, end);

        System.out.println(Arrays.toString(arr));
    }
    public static void swap(int[] demo, int first, int last){
        while(first<last){
            int temp=demo[first];
            demo[first]= demo[last];
            demo[last]= temp;
            first++;
            last--;
        }
    }
}
