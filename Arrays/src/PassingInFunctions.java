import java.util.Scanner;
public class PassingInFunctions {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int arr[] = new int [5];
        change(arr);
        //passing in functions a reference type data where a copy of the reference is passed and the original value gets modified too as they are pointing to the same object.
        System.out.println(arr[1]);
    }
    static void change(int[] nums){
        nums[1]=34;
    }
}