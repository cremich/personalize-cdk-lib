import { Readable } from "stream";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn";
import { S3Event } from "aws-lambda";
const s3Client = new S3Client({});
const sfnClient = new SFNClient({});

export const handler = async (event: S3Event): Promise<void> => {
  console.log(JSON.stringify(event));

  for (const r of event.Records) {
    const getObjectOutput = await s3Client.send(
      new GetObjectCommand({
        Bucket: r.s3.bucket.name,
        Key: r.s3.object.key,
      })
    );

    const trainingConfig = JSON.parse(
      await streamToString(getObjectOutput.Body as Readable)
    );
    await sfnClient.send(
      new StartExecutionCommand({
        stateMachineArn: process.env.STATE_MACHINE_ARN,
        input: JSON.stringify(trainingConfig),
      })
    );
  }
};

async function streamToString(stream: Readable): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
  });
}
