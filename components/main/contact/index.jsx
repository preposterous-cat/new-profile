import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactComponent = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="lg:row-span-3 w-96">
        <Card>
          <CardHeader>
            <CardTitle>Form</CardTitle>
          </CardHeader>
          <CardContent>
            lorem ipsum sir dolor amet.lorem ipsum sir dolor ametlorem ipsum sir
            dolor ametlorem ipsum sir dolor ametlorem ipsum sir dolor ametlorem
            ipsum sir dolor ametlorem ipsum sir dolor ametlorem ipsum sir dolor
            ametlorem ipsum sir dolor ametlorem ipsum sir dolor ametlorem ipsum
            sir dolor amet
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Image</CardTitle>
          </CardHeader>
          <CardContent>lorem ipsum sir dolor amet.</CardContent>
        </Card>
      </div>
      <div className=" lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Form</CardTitle>
          </CardHeader>
          <CardContent>lorem ipsum sir dolor amet.</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactComponent;
