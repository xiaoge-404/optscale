import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import Input from "components/Input";
import QuestionMark from "components/QuestionMark";
import { DEFAULT_MAX_INPUT_LENGTH } from "utils/constants";

export const FIELD_NAME = "accessKeyId";

const AccessKeyId = () => {
  const intl = useIntl();

  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <Input
      required
      dataTestId="input_nebius_access_key_id"
      error={!!errors[FIELD_NAME]}
      helperText={errors[FIELD_NAME] && errors[FIELD_NAME].message}
      InputProps={{
        endAdornment: (
          <QuestionMark
            messageId="nebiusAccessKeyIdTooltip"
            messageValues={{
              i: (chunks) => <i>{chunks}</i>
            }}
            dataTestId="qmark_access_key_id`"
          />
        )
      }}
      multiline
      label={intl.formatMessage({ id: "id" }).toUpperCase()}
      autoComplete="off"
      {...register(FIELD_NAME, {
        required: {
          value: true,
          message: intl.formatMessage({ id: "thisFieldIsRequired" })
        },
        maxLength: {
          value: DEFAULT_MAX_INPUT_LENGTH,
          message: intl.formatMessage(
            { id: "maxLength" },
            { inputName: intl.formatMessage({ id: "id" }).toUpperCase(), max: DEFAULT_MAX_INPUT_LENGTH }
          )
        }
      })}
    />
  );
};

export default AccessKeyId;
