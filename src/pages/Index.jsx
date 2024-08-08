import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
        
        <div className="mb-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="Cute cat" 
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feline Facts</CardTitle>
            <CardDescription>Interesting tidbits about our furry friends</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cats have over 20 vocalizations, including the meow, purr, and chirp.</li>
              <li>A group of cats is called a "clowder".</li>
              <li>Cats spend 70% of their lives sleeping.</li>
              <li>A cat's sense of smell is 14 times stronger than a human's.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>Some well-known feline friends</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Siamese</h3>
                <p>Known for their distinctive coloring and vocal nature.</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Maine Coon</h3>
                <p>Large, friendly cats with long, fluffy coats.</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Persian</h3>
                <p>Recognizable by their flat faces and long, luxurious fur.</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Bengal</h3>
                <p>Wild-looking cats with spotted or marbled coats.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
