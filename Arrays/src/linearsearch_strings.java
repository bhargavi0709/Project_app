import java.util.*;
public class linearsearch_strings {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter the string");
        String data = sc.nextLine();
        System.out.println("enter character");
        char ch= sc.next().charAt(0);
        boolean ptr= searchString(data, ch);
        if(ptr)
            System.out.println("character found");
        else
            System.out.println("char not found");

    }
    static boolean searchString(String str, char target){
        if (str.length()==0)
            return false;

        for(char ch: str.toCharArray()){
            if(ch== target)
                return true;
        }
        return false;
    }
}
