import {
  SESv2Client,
  ListEmailTemplatesCommand,
  CreateEmailTemplateCommand,
  CreateEmailTemplateCommandInput,
  DeleteEmailTemplateCommand,
  DeleteEmailTemplateCommandInput,
  GetEmailTemplateCommand,
  GetEmailTemplateCommandInput,
  UpdateEmailTemplateCommand,
  UpdateEmailTemplateCommandInput,
  SendEmailCommand,
  SendEmailCommandInput
} from '@aws-sdk/client-sesv2'
import { AwsCredentialIdentity } from '@aws-sdk/types'
import { useEffect, useState } from 'react'

const useAWSSes = (
  accessKeyId: string,
  secretAccessKey: string,
  region: string
) => {
  const [sesClient, setSesClient] = useState<SESv2Client | null>(null)

  useEffect(() => {
    debugger
    if (!accessKeyId || !secretAccessKey || !region) return
    setupSesClient({ accessKeyId, secretAccessKey }, region)
  }, [accessKeyId, secretAccessKey, region])

  // plug this in custom hook
  const setupSesClient = (creds: AwsCredentialIdentity, region: string) => {
    const data = new SESv2Client({
      region,
      credentials: {
        accessKeyId: creds.accessKeyId,
        secretAccessKey: creds.secretAccessKey
      }
    })
    setSesClient(data)
  }

  const listTemplates = (NextToken?: string) => {
    if (!sesClient) return
    const cmd = new ListEmailTemplatesCommand({
      PageSize: 12,
      // for pagination
      NextToken
    })
    return sesClient.send(cmd)
  }

  // Add new Template
  const addNewTemplate = (input: CreateEmailTemplateCommandInput) => {
    if (!sesClient) return

    const command = new CreateEmailTemplateCommand(input)
    return sesClient.send(command)
  }

  // Delete existing Template

  const deleteTemplate = (input: DeleteEmailTemplateCommandInput) => {
    if (!sesClient) return
    const command = new DeleteEmailTemplateCommand(input)
    return sesClient.send(command)
  }

  // Get template data
  const getTemplate = (input: GetEmailTemplateCommandInput) => {
    if (!sesClient) return
    const command = new GetEmailTemplateCommand(input)
    return sesClient.send(command)
  }

  //update template data
  const updateTemplate = (input: UpdateEmailTemplateCommandInput) => {
    if (!sesClient) return

    const command = new UpdateEmailTemplateCommand(input)
    return sesClient.send(command)
  }

  const sendEmail = async (params: SendEmailCommandInput) => {
    if (!sesClient) return
    try {
      const result = await sesClient.send(new SendEmailCommand(params))
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    listTemplates,
    addNewTemplate,
    deleteTemplate,
    getTemplate,
    updateTemplate,
    sendEmail
  }
}

export default useAWSSes
