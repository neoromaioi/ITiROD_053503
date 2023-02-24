using Socketapi;
using System.Net;
using System.Net.Sockets;
using System.Text;
//using System.Text.Json;
using Newtonsoft.Json;

string filename = @"C:\Socketapi\Socketapi\Socketapi\MsgHistory.json";
Console.OutputEncoding = System.Text.Encoding.UTF8;
IPAddress localAddress = IPAddress.Parse("127.0.0.1");
Console.Write("Введите свое имя: ");
string? username = Console.ReadLine();
Console.Write("Введите порт для приема сообщений: ");
if (!int.TryParse(Console.ReadLine(), out var localPort)) return;
Console.Write("Введите порт для отправки сообщений: ");
if (!int.TryParse(Console.ReadLine(), out var remotePort)) return;
Console.WriteLine();
History history = new History(username);
List<History> histories = new List<History>();
/*using (FileStream fs = new FileStream("MsgHistory.json", FileMode.OpenOrCreate))
{
    if (JsonSerializer.Deserialize<List<History>>(fs) != null)
    {
        histories = JsonSerializer.Deserialize<List<History>>(fs);
    }
}*/
if (JsonConvert.DeserializeObject<List<History>>(File.ReadAllText(filename)) != null)
{
    histories = JsonConvert.DeserializeObject<List<History>>(File.ReadAllText(filename));
}
if (histories.Count != 0)
{
    //Console.WriteLine("AAAAAAAA");
    foreach (History hist in histories)
    {
        Console.WriteLine(hist.id);
        if (hist.id == username)
        {
            history = hist;
            break;
        }
    }
}
else
{
    histories.Add(history);
}
foreach (string msg in history.messages)
{
    Console.WriteLine(msg);
}

// запускаем получение сообщений
Task.Run(ReceiveMessageAsync);
// запускаем ввод и отправку сообщений
await SendMessageAsync();

// отправка сообщений в группу
async Task SendMessageAsync()
{
    using Socket sender = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);
    Console.WriteLine("Для отправки сообщений введите сообщение и нажмите Enter");
    // отправляем сообщения
    while (true)
    {
        var message = Console.ReadLine(); // сообщение для отправки
        // если введена пустая строка, выходим из цикла и завершаем ввод сообщений
        if (string.IsNullOrWhiteSpace(message)) break;
        // иначе добавляем к сообщению имя пользователя
        message = $"{username}: {message}";
        byte[] data = Encoding.UTF8.GetBytes(message);
        history.messages.Add(message);
        /*using (FileStream fs = new FileStream("MsgHistory.json", FileMode.OpenOrCreate))
        {
            if (JsonSerializer.Deserialize<List<History>>(fs) != null)
            {
                File.Delete("MsgHistory.json");  
            }
        }*/
        int num = 0;
        while (histories[num].id != username)
        {
            num++;
        }
        histories.RemoveAt(num);
        histories.Add(history);
        /*if (JsonConvert.DeserializeObject<List<History>>(File.ReadAllText(filename)) != null)
        {*/
            //File.Create(filename);
            File.WriteAllText(filename, JsonConvert.SerializeObject(histories));
        //}
        // и отправляем на 127.0.0.1:remotePort
        await sender.SendToAsync(data, 0, new IPEndPoint(localAddress, remotePort));
    }
}
// отправка сообщений
async Task ReceiveMessageAsync()
{
    byte[] data = new byte[65535]; // буфер для получаемых данных
    // сокет для прослушки сообщений
    using Socket receiver = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);
    // запускаем получение сообщений по адресу 127.0.0.1:localPort
    receiver.Bind(new IPEndPoint(localAddress, localPort));
    while (true)
    {
        // получаем данные в массив data
        var result = await receiver.ReceiveFromAsync(data, 0, new IPEndPoint(IPAddress.Any, 0));
        var message = Encoding.UTF8.GetString(data, 0, result.ReceivedBytes);
        history.messages.Add(message);
        int num = 0;
        while (histories[num].id != username)
        {
            num++;
        }
        histories.RemoveAt(num);
        histories.Add(history);
        /*if (JsonConvert.DeserializeObject<List<History>>(File.ReadAllText(filename)) != null)
        {*/
            //File.Create(filename);
            File.WriteAllText(filename, JsonConvert.SerializeObject(histories));
        //}
        // выводим сообщение
        Console.WriteLine(message);
    }
}
