package princetonprojects;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        Runnable runable =  ()-> System.out.println("Hi from my runnable.");
        Thread thread = new Thread(runable);
        thread.start();
    }
}
