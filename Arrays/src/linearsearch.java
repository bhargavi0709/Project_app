import java.util.*;
public class linearsearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arr[] = {56, 78, 9, 10, 2, 67, 3, 9, 0};
        System.out.println("enter element to be searched");
        int num = sc.nextInt();
        boolean result = linearSearch(arr, num);
        if (result){
        System.out.println("element found");}
        else {
            System.out.println("not found");
        }

    }


//    static int linearSearch(int[] arr, int num) {
//        int c=0;
//        if (arr.length == 0)
//            return -1;
//        else {
//            for (int i = 0; i < arr.length; i++) {
//                if (arr[i] == num)
//                    c = 1;
//            }
//        }
//            if(c==1)
//        return 1;
//            else
//                return -1;
//    }
    static boolean linearSearch(int[] arr, int num){
        if(arr.length == 0)
            return false;

        for(int element: arr) {
            if (element == num)
                return true;
        }
        return false;
    }
}
